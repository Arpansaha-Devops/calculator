import Text from './word-guess-game/componenet/Text'
import './index.css'
import Tag from './word-guess-game/componenet/Tag'
import Button from './word-guess-game/componenet/Button'
import { Input } from './word-guess-game/componenet/input'
function App() {


  return (
    <>
    <Tag  label='score' />
    <Button label='Guess' onClick={() => console.log("guess clicked")} />
    <Button label='=>' onClick={() => console.log("guess clicked")} />
    <Text text='answer'  type={Text.styleTypes.answer} />
    <Text text='question' type={Text.styleTypes.questIon} />
    <Text text='score' type={Text.styleTypes.score} />
    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
      <Input onInput={(value) => console.log(value)} />
      <Input onInput={(value) => console.log(value)} />
      <Input onInput={(value) => console.log(value)} />
      <Input onInput={(value) => console.log(value)} />
    </div>
    </>
  )
}

export default App
