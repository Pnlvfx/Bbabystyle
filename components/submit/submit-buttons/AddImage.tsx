import { ChangeEvent, useRef } from 'react'
import { UserMenuButton } from '../../header/usermenu/buttons/notuser/ThemeButton'
import { useMessage } from '../../utils/message/TimeMsgContext'
import { AddImageIcon } from '../../utils/svg/SVG'
import { useSubmitProvider } from '../SubmitProvider'
import { previewImage } from '../submitutils/myReader'

const AddImage = ({ styles }: UserMenuButton) => {
  const message = useMessage()
  const filePickerRef = useRef<HTMLInputElement>(null)
  const { setSelectedFile, setIsImage, setHeight, setWidth, setIsVideo } = useSubmitProvider()

  const addImageToPost = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      previewImage(file, message, setHeight, setWidth, setSelectedFile)
    }
  }

  return (
    <span className="h-8 w-8">
      <button
        className={`${styles.submitButton} transition-all`}
        role={'button'}
        tabIndex={-1}
        title="Add an image"
        onClick={() => {
          filePickerRef && filePickerRef.current?.click()
          setIsVideo(false)
          setIsImage(true)
        }}
      >
        <AddImageIcon className={styles.submitButtonIcon} />
        <div className="absolute bottom-0 left-0 right-0 top-0">
          <div className={`${styles.submitButtonTitle} transition-opacity`}>{'Add an image'}</div>
        </div>
        <input className="text-[16px]" type="file" accept="image/png, image/jpeg, image/webp" hidden onChange={addImageToPost} ref={filePickerRef} />
      </button>
    </span>
  )
}

export default AddImage
