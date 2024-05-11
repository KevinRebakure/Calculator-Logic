import { colors } from '../App'

export default function Display({ values, equalPressed }) {
  const text = values.dark ? colors.text.dark : colors.text.light

  if (equalPressed) {
    return (
      <>
        <div className="flex h-24 w-full items-center justify-end rounded-md  p-2">
          <p className={`${text} text-right text-5xl`}>{values.result}</p>
        </div>
      </>
    )
  } else {
    if (values.text == '') {
      return (
        <>
          <div className="flex h-24 w-full flex-col items-end rounded-md  p-2">
            <p className={`${text} text-right text-xl`}>0</p>
            <p className={`${text} text-right text-5xl`}>{values.result}</p>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="flex h-24 w-full flex-col items-end rounded-md  p-2">
            <p className={`${text} text-right text-xl`}>{values.text}</p>
            <p className={`${text} text-right text-5xl`}>{values.result}</p>
          </div>
        </>
      )
    }
  }
}
