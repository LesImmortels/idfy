export default function Card() {
    return (
        <div className=" w-full m-auto flex justify-end">
        <img className=" w-72 py-12" src={process.env.PUBLIC_URL + '/cards.png'}
        />
        </div>
    )
}
