import "./Collection.css";
import { CollectionItem } from "../CollectionItem/CollectionItem";

interface CollectionProps {
  className?: string;
  name: string;
  collection:Array<string>;
}

export const Collection = ({ className, name, collection}: CollectionProps) => {
  return (
    <>
      <div className={`collection ${className}`}>
        <div className="collection__header">
          <h3> Mis Colecciones de {name} </h3>
        </div>
        <div className="collection__body">
          {collection.map((item) => {
            return <CollectionItem key={1} item={item}/>;
          //   tengo que cambiar eso de la key a la hora de hacer la petición jiji
          })}
        </div>
      </div>
    </>
  );
};
