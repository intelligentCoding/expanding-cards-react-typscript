import classNames from 'classnames'

interface ImageCardProps {
  id: string
  name: string
  isActive: boolean
  onImageClick: (activeId: string) => void
  
}

export const ImageCard: React.FC<ImageCardProps> = ({id, isActive, name, onImageClick}) => {
  const mainClass = classNames(
    id,
    'bg-cover bg-no-repeat h-[90vh] rounded-3xl cursor-pointer relative transition-opacity ease-in duration-700 opacity-100 hover:rounded-3xl bg-red',
    {
      'flex-[5]' : isActive,
      'flex-[0.5] hover:opacity-[0.7]' : !isActive,
    }
  )

    const titleClass = classNames(
      'text-xl absolute bottom-5 left-5 m-0',
      {
        'opacity-1 transition duration-1000 ease-in-out': isActive,
        'opacity-0': !isActive
      }
    )
  return (
    <>
    <div className={mainClass} onClick={() => {
      onImageClick(id)
    }}>
    <div className={titleClass}>{name}</div>
  </div>
    </>
  )
}