export type TCardSizes = "sm" | "md" | "lg";

export type TCardTitle = {
    size?: TCardSizes;
} & React.HTMLAttributes<HTMLHeadingElement>;

export type TCardParagraph = {
    size?: TCardSizes;
} & React.HTMLAttributes<HTMLParagraphElement>;

export type TCardRoot = {
    variant?: "default" | "outlined" 
} & React.HTMLAttributes<HTMLDivElement>;