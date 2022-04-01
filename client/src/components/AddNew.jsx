import React from "react"

const AddNew = () => {
    return (
        <div className="newMusic">
            <h3>Add New Music</h3>
            <label>
                Name:
                <input type="text"/>
            </label>
            <label>
                Album Title:
                <input type="text"/>
            </label>
            <label>
                Track Listings:
                <input type="text"/>
            </label>
            <label>
                Release Date:
                <input type="text"/>
            </label>
            <label>
                Label:
                <input type="text"/>
            </label>
            <label>
                Album Art URL:
                <input type="text"/>
            </label>
        </div>
    )
}

export default AddNew