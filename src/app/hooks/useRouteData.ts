import { useMatches } from "react-router";
import type { MenuItem } from "../../modules/shared/domain/MenuItem";

export const useRouteData = () => {
    const matches = useMatches();
    const currentMatch = matches[matches.length - 1];
    const handle = currentMatch?.handle as MenuItem | undefined;

    return {
        title: handle?.title,
        key: handle?.key,
        ...handle
    };
};