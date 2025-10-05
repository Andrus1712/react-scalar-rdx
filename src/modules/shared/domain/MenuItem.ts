export interface MenuItem {
    id: number;
    label: string;
    to: string;
    icon: string;
    order: number;
    index?: boolean;
    title: string;
    showMenu: boolean;
    key: string;
}
