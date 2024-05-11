import { useEffect, useState } from 'react'
import Display from './components/Display'
import Key from './components/Key'

export const colors = {
  text: { light: 'text-zinc-800', dark: 'text-zinc-100' },
  bg: { light: 'bg-zinc-100', dark: 'bg-zinc-700' },
  hover: { light: 'hover:bg-slate-300', dark: 'hover:bg-slate-600' },
}

export default function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState(0)
  const [expression, setExpression] = useState('')
  const [equalPressed, setEqualPressed] = useState(false)
  const [dot, setDot] = useState(false)
  const [dark, setDark] = useState(false)

  const values = {
    text: text,
    result: result,
    expression: expression,
    equalPressed: equalPressed,
    dot: dot,
    dark: dark,
  }

  let computeCondition = ['+', '-', '*', '/', '.', '']

  useEffect(() => {
    if (
      !computeCondition.includes(
        values.expression[values.expression.length - 1],
      ) &&
      expression != ''
    ) {
      return setResult(eval(expression))
    } else if (text == '') {
      return setResult(0)
    }
  }, [expression])

  const bg = dark ? colors.bg.dark : colors.bg.light

  return (
    <>
      <div
        className={`${bg} m-auto flex h-screen w-96 flex-col items-center space-y-3 p-4 shadow-2xl transition-colors`}
      >
        <Display values={values} equalPressed={equalPressed} />

        <div className="grid grid-cols-4">
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label={7}
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label={8}
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label={9}
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label="+"
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label={4}
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label={5}
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label={6}
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label="-"
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label={1}
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label={2}
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label={3}
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label="÷"
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label="."
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label={0}
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label="DEL"
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label="×"
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label="AI"
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label="C"
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
            ]}
            label="="
          />
          <Key
            values={values}
            functions={[
              setText,
              setExpression,
              setResult,
              setEqualPressed,
              setDot,
              setDark,
            ]}
            label={dark ? 'Dark' : 'Light'}
          />
        </div>

        <p className="font-semibold">A Kevin Rebakure Production</p>
      </div>
    </>
  )
}
