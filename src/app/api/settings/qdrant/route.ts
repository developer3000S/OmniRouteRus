import { NextRequest, NextResponse } from "next/server";
import { getSettings, updateSettings } from "@/lib/localDb";
import { isAuthenticated } from "@/shared/utils/apiAuth";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
import { updateSettingsSchema } from "@/shared/validation/schemas";

/**
 * Filter settings to only include Qdrant-related fields.
 */
function pickQdrantSettings(settings: Record<string, any>) {
  return {
    qdrantEnabled: !!settings.qdrantEnabled,
    qdrantHost: settings.qdrantHost || "",
    qdrantPort: settings.qdrantPort || 6333,
    qdrantApiKey: settings.qdrantApiKey || "",
    qdrantCollection: settings.qdrantCollection || "omniroute",
    qdrantEmbeddingModel: settings.qdrantEmbeddingModel || "openai/text-embedding-3-small",
  };
}

export async function GET(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const settings = await getSettings();
    return NextResponse.json(pickQdrantSettings(settings));
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json().catch(() => ({}));
    
    // Use the main settings schema but only pick Qdrant fields for the update
    const validation = validateBody(updateSettingsSchema, body);
    if (isValidationFailure(validation)) {
      return validation.response;
    }

    const updates: Record<string, any> = {};
    const qdrantKeys = [
      "qdrantEnabled", 
      "qdrantHost", 
      "qdrantPort", 
      "qdrantApiKey", 
      "qdrantCollection", 
      "qdrantEmbeddingModel"
    ];

    for (const key of qdrantKeys) {
      if (key in validation.data) {
        updates[key] = (validation.data as any)[key];
      }
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: "No Qdrant settings provided" }, { status: 400 });
    }

    const nextSettings = await updateSettings(updates);
    return NextResponse.json(pickQdrantSettings(nextSettings));
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
