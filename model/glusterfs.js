var exec = require('child_process').exec;

function showPeerStatus() {
    return new Promise((resolve, reject) => {
        exec("gluster peer status", function(err, stdout) {
            if (err) {
              return reject(err);
            }
            resolve(stdout);
          });
    })
}

exports.module = {
    showPeerStatus
}

if (module.id === '.'){
    showPeerStatus().then(console.log);
}