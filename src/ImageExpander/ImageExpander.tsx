import classNames from "classnames";
import { FunctionComponent, useState } from "react";
import { ImageCard } from "./ImageCard";

export const ImageExapnder: FunctionComponent = () => {
  const [activeId, setActiveId] = useState('bg-jasper')
  const onImageClick = (activeId: string) => {
    setActiveId(activeId)
  }
  
  const imageIdArray = [
    {id: 'bg-jasper', name: 'Jasper, AB, Canada'},
    {id: 'bg-jasper2', name: 'Jasper, AB, Canada'},
    {id: 'bg-canmore', name: 'Canmore, AB, Canada'},
    {id: 'bg-canmore2', name: 'Canmore, AB, Canada'},
    {id: 'bg-lake-louise', name: 'Lake Louise, Alberta, Canada'},
    {id: 'bg-emerald-lake', name: 'Emerald Lake, Crowsnest Pass, Alberta, Canada'}
  ]

  return (
      <>
    <div className="items-center justify-center h-screen m-0 overflow-auto text-white font-bold">
      <div className="flex w-90vw">
        {imageIdArray.map(image => {
          return (
            <>
          <ImageCard name={image.name} id={image.id} isActive={activeId === image.id} onImageClick={onImageClick} />
            </>
          )
        })}
      </div>
    </div>
    </>
  )
}