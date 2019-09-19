function changeName(data) {
    return {
        type: 'add',
        data: data
    }
}

function deleteBtn(i) {
    return {
        type: 'Delete',
        index: i
    }
    // this.state.data.data.splice(i, 1);
}
function editBtn(v) {
    return {
        type: 'Edit',
        editData: v
    }
}

function cancelBtn(v) {
    return {
        type: 'cancel',
        editData: v
    }
}

function delAllBtn() {
    return {
        type: 'delAll',
    }
}
function updateBtn(val, update) {
    console.log(val)
    return {
        type: 'update',
        ind: update,
        payload: val
    }
}

export { changeName, deleteBtn, editBtn, cancelBtn, updateBtn, delAllBtn }

