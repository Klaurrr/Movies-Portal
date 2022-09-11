const prepareGenre = (value: string | undefined) => {  
    return (value) ? value : 'N/A'
}

export default prepareGenre;