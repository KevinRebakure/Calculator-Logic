import { colors } from '../App'

let exceptions = ['DEL', 'AI', '=', 'C']
let operators = ['+', '-', '×', '÷']
let signCondition = ['+', '-', '×', '÷', '.']
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.']
// let pureNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

export default function Key({ label, functions, values }) {
  function handler() {
    if (!exceptions.includes(label) && values.equalPressed == false) {
      if (
        values.text.length == 0 &&
        (numbers.includes(label) || label == '-')
      ) {
        if (label == '.' && values.dot == false) {
          return [
            functions[0]((prev) => {
              return prev + label
            }),
            functions[1]((prev) => {
              //1
              if (label == '÷') {
                return prev + '/'
              }
              if (label == '×') {
                return prev + '*'
              } else {
                return prev + label
              }
            }),
            functions[4](true),
          ]
        } else if (label != '.') {
          return [
            functions[0]((prev) => {
              return prev + label
            }),
            functions[1]((prev) => {
              //1
              if (label == '÷') {
                return prev + '/'
              }
              if (label == '×') {
                return prev + '*'
              } else {
                return prev + label
              }
            }),
          ]
        }
      } else if (
        values.text.length == 1 &&
        values.text != 0 &&
        numbers.includes(label)
      ) {
        if (label == '.' && values.dot == false) {
          return [
            functions[0]((prev) => {
              return prev + label
            }),
            functions[1]((prev) => {
              //1
              if (label == '÷') {
                return prev + '/'
              }
              if (label == '×') {
                return prev + '*'
              } else {
                return prev + label
              }
            }),
            functions[4](true),
          ]
        } else if (label != '.') {
          return [
            functions[0]((prev) => {
              return prev + label
            }),
            functions[1]((prev) => {
              //1
              if (label == '÷') {
                return prev + '/'
              }
              if (label == '×') {
                return prev + '*'
              } else {
                return prev + label
              }
            }),
          ]
        }
      } else if (
        values.text.length == 1 &&
        values.text == 0 &&
        label == '.' &&
        values.dot == false
      ) {
        return [
          functions[0]((prev) => {
            return prev + label
          }),
          functions[1]((prev) => {
            //1
            if (label == '÷') {
              return prev + '/'
            }
            if (label == '×') {
              return prev + '*'
            } else {
              return prev + label
            }
          }),
          functions[4](true),
        ]
      } else if (
        values.text.length > 1 &&
        values.text[values.text.length - 1] == 0 &&
        !operators.includes(values.text[values.text.length - 2]) &&
        numbers.includes(label)
      ) {
        if (label == '.' && values.dot == false) {
          return [
            functions[0]((prev) => {
              return prev + label
            }),
            functions[1]((prev) => {
              //1
              if (label == '÷') {
                return prev + '/'
              }
              if (label == '×') {
                return prev + '*'
              } else {
                return prev + label
              }
            }),
            functions[4](true),
          ]
        } else if (label != '.') {
          return [
            functions[0]((prev) => {
              return prev + label
            }),
            functions[1]((prev) => {
              //1
              if (label == '÷') {
                return prev + '/'
              }
              if (label == '×') {
                return prev + '*'
              } else {
                return prev + label
              }
            }),
          ]
        }
      } else if (
        values.text.length > 1 &&
        values.text[values.text.length - 1] == 0 &&
        operators.includes(values.text[values.text.length - 2]) &&
        label == '.' &&
        values.dot == false
      ) {
        return [
          functions[0]((prev) => {
            return prev + label
          }),
          functions[1]((prev) => {
            //1
            if (label == '÷') {
              return prev + '/'
            }
            if (label == '×') {
              return prev + '*'
            } else {
              return prev + label
            }
          }),
          functions[4](true),
        ]
      } else if (
        values.text.length > 1 &&
        values.text[values.text.length - 1] != 0 &&
        numbers.includes(label)
      ) {
        if (label == '.' && values.dot == false) {
          return [
            functions[0]((prev) => {
              return prev + label
            }),
            functions[1]((prev) => {
              //1
              if (label == '÷') {
                return prev + '/'
              }
              if (label == '×') {
                return prev + '*'
              } else {
                return prev + label
              }
            }),
            functions[4](true),
          ]
        } else if (label != '.') {
          return [
            functions[0]((prev) => {
              return prev + label
            }),
            functions[1]((prev) => {
              //1
              if (label == '÷') {
                return prev + '/'
              }
              if (label == '×') {
                return prev + '*'
              } else {
                return prev + label
              }
            }),
          ]
        }
      }

      if (
        values.text.length > 0 &&
        operators.includes(label) &&
        !signCondition.includes(values.text[values.text.length - 1])
      ) {
        return [
          functions[0]((prev) => {
            return prev + label
          }),
          functions[1]((prev) => {
            //1
            if (label == '÷') {
              return prev + '/'
            }
            if (label == '×') {
              return prev + '*'
            } else {
              return prev + label
            }
          }),
          functions[4](false),
        ]
      }
    }

    if (!exceptions.includes(label) && values.equalPressed == true) {
      if (numbers.includes(label)) {
        if (label == '.' && values.dot == false) {
          return [
            functions[0](''),
            functions[1](''),
            functions[0]((prev) => {
              return prev + label
            }),
            functions[1]((prev) => {
              if (label == '÷') {
                return prev + '/'
              }
              if (label == '×') {
                return prev + '*'
              } else {
                return prev + label
              }
            }),
            functions[3](false),
            functions[4](true),
          ]
        } else if (label != '.') {
          return [
            functions[0](''),
            functions[1](''),
            functions[0]((prev) => {
              return prev + label
            }),
            functions[1]((prev) => {
              if (label == '÷') {
                return prev + '/'
              }
              if (label == '×') {
                return prev + '*'
              } else {
                return prev + label
              }
            }),
            functions[3](false),
          ]
        }
      }
      if (operators.includes(label)) {
        return [
          // clear
          functions[0](values.result),
          functions[1](values.result),
          // new text
          functions[0]((prev) => {
            return prev + label
          }),
          // new expression
          functions[1]((prev) => {
            if (label == '÷') {
              return prev + '/'
            }
            if (label == '×') {
              return prev + '*'
            } else {
              return prev + label
            }
          }),
          functions[3](false),
          functions[4](false),
        ]
      }
    }

    if (label == 'DEL' && values.equalPressed == false) {
      return [
        functions[0]((prev) => {
          return prev.slice(0, prev.length - 1)
        }),
        functions[1]((prev) => {
          return prev.slice(0, prev.length - 1)
        }),
      ]
    }

    if (label == 'C') {
      return [
        functions[0](''),
        functions[1](''),
        functions[2](0),
        functions[3](false),
        functions[4](false),
      ]
    }

    if (label == '=' && values.text != '') {
      return [functions[3](true), functions[4](false)]
    }

    if (label == 'Dark') {
      return functions[5](false)
    } else if (label == 'Light') {
      return functions[5](true)
    }
  }

  const text = values.dark ? colors.text.dark : colors.text.light
  const hover = values.dark ? colors.hover.dark : colors.hover.light

  return (
    <>
      <p
        onClick={handler}
        className={`${text} flex size-20 items-center justify-center ${hover} rounded-lg`}
      >
        {label}
      </p>
    </>
  )
}
