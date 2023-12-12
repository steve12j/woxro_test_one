import React, { useState } from 'react'

const UserTable = () => {
    const [dirName, setDirName] = useState("");
    const [movieName, setMovieName] = useState("");
    const [movieDetails, setMovieDetails] = useState([]);

    const handleAdd = () => {
        const details = {
            dir_name: dirName,
            movie_name: movieName
        }

        setMovieDetails(prev => [...prev, details])
        setDirName("");
        setMovieName("");
    }

    const handleRemove = (index) => {
        const detailsArray = movieDetails
        detailsArray.splice(index, 1)
        console.log(detailsArray)
        setMovieDetails([...detailsArray])
    }

    console.log(movieDetails)

    const movieDetailsElements = movieDetails.map((details, index) => (
        <tr key={index}>
            <td>{details.dir_name}</td>
            <td>{details.movie_name}</td>
            <td>
                <button
                    onClick={() => handleRemove(index)}
                >
                    Remove
                </button>
            </td>
        </tr>
    ))

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <input
                            className='element'
                            type="text"
                            value={dirName}
                            placeholder='Director Name'
                            onChange={(e) => setDirName(e.target.value)}
                        />
                    </th>
                    <th>
                        <input
                            className='element'
                            type="text"
                            value={movieName}
                            placeholder='Movie Name'
                            onChange={(e) => setMovieName(e.target.value)}
                        />
                    </th>
                    <th
                        onClick={handleAdd}
                    >
                        Add
                    </th>
                </tr>
            </thead>
            <tbody>
                {movieDetailsElements}
            </tbody>
        </table>
    )
}

export default UserTable