type ProfilePicSizeType = "xs" | "sm" | "md" | "lg"

export interface ProfilePicProps {
  size?: ProfilePicSizeType
  img: string
  altText?: string
  className?: string
}
