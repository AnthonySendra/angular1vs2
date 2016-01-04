export interface Notification {
    id:  number;
    text: string;
    icon: string,
    class: string,
    source:  string,
    expanded: boolean,
    canEdit: boolean
}