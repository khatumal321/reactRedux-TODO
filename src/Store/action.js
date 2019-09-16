function changeName (data) {
    console.log(data)
    return{
        type: 'Update',
        data: data
    }
}

export {changeName}