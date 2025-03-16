import { generateDynamicAvatar } from "../assets/utils/generateDynamicAvatar.ts";
import {ComponentProps} from "react";
import {useQuery} from "@tanstack/react-query";
import {LoaderCircle} from "lucide-react";


type Props = ComponentProps<"img"> & {
    displayName?: string | null;
    photoURL?: string | null;
};

export default function UserProfilePhoto({ displayName, photoURL, ...props }: Props) {

    const { data: dynamicUserAvatar, isLoading } = useQuery({
        queryKey: ["dynamic_user_avatar"],
        queryFn: async () => await generateDynamicAvatar(displayName || "User")
    });

    if (!dynamicUserAvatar && !photoURL) return null;

    if (isLoading) return <LoaderCircle className="animate-spin" />;

    return (
        <img {...props} src={photoURL || dynamicUserAvatar} alt={`${displayName || "User"} photo`} referrerPolicy="no-referrer" />
    )
}