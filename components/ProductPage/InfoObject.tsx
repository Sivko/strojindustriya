import { Result } from "@/type";
import Button from "../Button";

export default function InfoObject({ data }: { data: Result }) {

  return (
    <div className="mt-12 content">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
        <div>
          {!!data.properties.address.rich_text.length && <Button text="Посмотреть на карте" icons={false} />}
        </div>
        <div>
          {!!data.properties.style.rich_text.length && (<div className="mt-6">
            <strong className="block text-base mb-3">Cтиль</strong>
            <p className="text-base text-addText">{data.properties.style.rich_text[0].text.content}</p>
          </div>)}
          {!!data.properties.address.rich_text.length && (<div className="mt-6">
            <strong className="block text-base mb-3">Адрес</strong>
            <p className="text-base text-addText">{data.properties.address.rich_text[0].text.content}</p>
          </div>)}
        </div>
      </div>
    </div>
  )
}