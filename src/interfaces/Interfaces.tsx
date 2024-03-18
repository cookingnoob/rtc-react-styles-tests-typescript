export interface CardProps {
    src: string;
    alt: string;
    title: string;
    description:string
}

export interface DestinationCardProps {
  card: CardProps
}

export interface ReserveButtonProps{
  title: string
}

export interface SubmitFormProps {
    title: string
}