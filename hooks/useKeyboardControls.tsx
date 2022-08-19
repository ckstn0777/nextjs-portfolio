import { useEffect, useState } from 'react'

const keys = {
  KeyW: 'forward',
  KeyS: 'backward',
  KeyA: 'left',
  KeyD: 'right',
  Space: 'jump',
}
type Keys = keyof typeof keys

const moveFieldByKey = (key: Keys) => keys[key]

function isValidMoveFieldKey(key: Keys | string): key is Keys {
  return keys[key as Keys] !== undefined
}

function useKeyboardControls() {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const inputKey = e.code
      if (!isValidMoveFieldKey(inputKey)) return
      setMovement((m) => ({ ...m, [moveFieldByKey(inputKey)]: true }))
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      const inputKey = e.code
      if (!isValidMoveFieldKey(inputKey)) return
      setMovement((m) => ({ ...m, [moveFieldByKey(inputKey)]: false }))
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return movement
}

export default useKeyboardControls
