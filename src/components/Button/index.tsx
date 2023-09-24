import { PaymentContainer } from "./styles"

type Props = {
  text: string
  children: JSX.Element;
}

export function Button({ text, children }: Props) {
  return (
    <PaymentContainer >
      <div>
        <span>
          {children}
        </span>
        {text}
      </div>
    </PaymentContainer>
  )
}
