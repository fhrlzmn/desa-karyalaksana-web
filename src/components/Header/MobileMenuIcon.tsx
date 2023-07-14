export enum Variant {
  'Open',
  'Close',
}

interface Props {
  variant: Variant
  className?: string
}

export default function MobileMenuIcon({ variant, className }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      className={className}
    >
      <path
        d={
          variant === Variant.Open
            ? 'M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z'
            : 'm249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z'
        }
      />
    </svg>
  )
}
