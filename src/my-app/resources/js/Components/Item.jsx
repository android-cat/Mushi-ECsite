export default function Item(props) {
    const itemUrl="/items?id="+props.id;

    return (
        <>
            <a href={itemUrl}>
                <div className="w-50 bg-white flex justify-center transform duration-700 hover:scale-90">
                    <div className="w-48 text-center text-xl">
                        <p className="my-4">{props.userName}の出品</p>        
                        <img className="my-4" src={props.url}/>
                        <p className="text-base my-4">{props.title}</p>
                        <p className="my-4">Price: ¥{props.price}</p>
                    </div>
                </div>
            </a>
        </>
    );
}