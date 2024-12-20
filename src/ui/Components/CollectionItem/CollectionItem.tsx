import './CollectionItem.css'

interface CollectionItemProps {
    item: string;
    key: number;
}


export const CollectionItem = ({key,item}:CollectionItemProps) => {
  return (
    <div className="collectionItem" key={key}>
      <h4>{item}</h4>
    </div>
  );
}