import { storiesOf } from '@storybook/react'
import React from 'react'
import ThanosGrove from '@components/ThanosGrove'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'
// @ts-ignore
import style from './ThanosGrove.stories.css'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      header: false,
      inline: true
    })
  )
  .add('ThanosGrove', () => (
    <div className={style.wrap}>
      <ThanosGrove className={text('className', style.grove)} />
      <span className={style.tip}>Click the Grove</span>
    </div>
  ))
