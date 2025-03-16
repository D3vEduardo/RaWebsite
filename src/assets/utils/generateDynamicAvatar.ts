import {createAvatar} from "@dicebear/core"
import { dylan } from "@dicebear/collection";
import { toPng } from "@dicebear/converter";

export async function generateDynamicAvatar(username: string) {
    const resultAvatar = createAvatar(dylan, {
        seed: username
    });

    const avatarPng = toPng(resultAvatar);
    const avatarPngUri = await avatarPng.toDataUri()
    return avatarPngUri;
}