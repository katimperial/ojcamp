import React, {useState, useEffect} from "react"

const AddNew = () => {
    // const newProject = {

    //     name: name 
    // }

    const [name, setName] = useState('')
    const [albumTitle, setAlbumTitle] = useState('')
    const [trackListings, setTrackingListings] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [label, setLabel] = useState('')
    const [albumArt, setAlbumArt] = useState('')

    useEffect(() => {console.log(name)}, [name])
    useEffect(() => {console.log(albumTitle)}, [albumTitle])
    useEffect(() => {console.log(trackListings)}, [trackListings])
    useEffect(() => {console.log(releaseDate)}, [releaseDate])
    useEffect(() => {console.log(label)}, [label])
    useEffect(() => {console.log(albumArt)}, [albumArt])

    return (
        <div className="newMusic">
            <h3>Add New Music</h3>
            <label>
                Name: 
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <label>
                Album Title: 
                <input type="text" value={albumTitle} onChange={e => setAlbumTitle(e.target.value)}/>
            </label>
            <label>
                Track Listings: 
                <input type="text" value={trackListings} onChange={e => setTrackingListings(e.target.value)}/>
            </label>
            <label>
                Release Date: 
                <input type="text" value={releaseDate} onChange={e => setReleaseDate(e.target.value)}/>
            </label>
            <label>
                Label: 
                <input type="text" value={label} onChange={e => setLabel(e.target.value)}/>
            </label>
            <label>
                Album Art URL: 
                <input type="text" value={albumArt} onChange={e => setAlbumArt(e.target.value)}/>
            </label>
            <button>Submit</button>
        </div>
    )
}

export default AddNew