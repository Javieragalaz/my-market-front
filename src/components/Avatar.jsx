export default function Avatar (source = 'notImage' ) {

const avatarImage = {
notImage: 'https://archive.org/download/user-image-with-black-background_318-34564/user-image-with-black-background_318-34564.jpg'}

    return (
        <div>
         <img src={`${avatarImage[source]}`} />
         </div>
    )
}