function getText(URL){
    return new Promise((resolve, reject) => {
        fetch(URL)
            .then(snap => {
                snap.text()
                    .then(text => {
                        resolve(text);
                    });
            })
            .catch(reject);
    });     
}