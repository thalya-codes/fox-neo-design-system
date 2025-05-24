export type TButton  = {
    variant?: "primary" | "outline" | "link" | "danger";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
} 

export interface IButtonActions {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;   
}

