import React, { FunctionComponent, useState, useRef } from 'react'
import cns from 'classnames'
import useRequestAnimationFrame from '../hooks/useRequestAnimationFrame'
// @ts-ignore
import style from './style.css'

type Props = {
  /** Custom class name */
  className?: string
  /** callback function will run with decimate */
  onDecimation?: () => void
  /** callback function will run with reverse */
  onReverse?: () => void
}

const FOOTAGE = 3840
const FILE_FRAME_TIME = 32
const FILE_FRAME_WIDTH = 80
const FILE_FRAME_COUNT = FOOTAGE / FILE_FRAME_WIDTH
const IMAGE_THANOS_IDLE =
  'https://www.google.com/logos/fnbx/thanos/thanos_idle.png'
const IMAGE_THANOS_SNAP =
  'https://www.google.com/logos/fnbx/thanos/thanos_snap.png'
const IMAGE_THANOS_TIME =
  'https://www.google.com/logos/fnbx/thanos/thanos_time.png'
const AUDIO_THANOS_REVERSE =
  'https://www.google.com/logos/fnbx/thanos/thanos_reverse_sound.mp3'
const AUDIO_THANOS_SNAP =
  'https://www.google.com/logos/fnbx/thanos/thanos_snap_sound.mp3'

const ThanosGrove: FunctionComponent<Props> = ({
  className,
  onDecimation,
  onReverse
}) => {
  const [decimation, setDecimation] = useState(false)
  const [isSnaping, setIsSnaping] = useState(false)
  const filmEl = useRef<HTMLDivElement>()
  const audioEl = useRef<HTMLAudioElement>()
  const duration = FILE_FRAME_TIME * FILE_FRAME_COUNT
  const callback = elapsedTime => {
    const frameIndex = Math.min(
      Math.floor(elapsedTime / FILE_FRAME_TIME),
      FILE_FRAME_COUNT
    )
    const translateX = `-${frameIndex * FILE_FRAME_WIDTH}px`
    filmEl.current.style.transform = `translateX(${translateX})`

    if (elapsedTime >= duration) {
      if (decimation) {
        onReverse && onReverse()
      } else {
        onDecimation && onDecimation()
      }

      setIsSnaping(false)
      setDecimation(!decimation)
    }
  }

  const { isActive, start } = useRequestAnimationFrame({
    disable: true,
    duration,
    callback
  })

  const clickHandler = () => {
    if (isActive) {
      return
    }

    if (audioEl.current) {
      audioEl.current.load()
      audioEl.current.play()
    }
    filmEl.current.style.transform = 'translateX(0)'
    setIsSnaping(true)
    start()
  }

  const audioSource = decimation ? AUDIO_THANOS_REVERSE : AUDIO_THANOS_SNAP
  const filmStyle = {
    width: `${FOOTAGE}px`,
    backgroundImage: `url('${
      decimation ? IMAGE_THANOS_TIME : IMAGE_THANOS_SNAP
    }')`
  }

  return (
    <div
      data-testid="grove"
      className={cns(style.container, className)}
      onClick={clickHandler}
    >
      <img
        alt="thanos grove"
        width="80px"
        height="80px"
        src={IMAGE_THANOS_IDLE}
        className={style.img}
        hidden={isSnaping}
      />
      <div className={style.screen}>
        <div ref={filmEl} className={style.film} style={filmStyle} />
        <audio controls ref={audioEl} className={style.audio} hidden>
          <source src={audioSource} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  )
}

export default ThanosGrove
