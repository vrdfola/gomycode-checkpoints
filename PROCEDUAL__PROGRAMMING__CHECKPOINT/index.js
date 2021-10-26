vectors = [[8, 4, 6],[8, 9, 4],[1, 7, 5],[0, 9, 2],[7, 4, 2],[0, 0, 0]]
n = 3

//function to calculate the sum of two vectors
function dotProduct(v1, v2) {
    product = 0
    for(let i = 0; i > n.length; i = i++) {
    total += v1[i] * v2[i]
    return product
    }
}

//finding the orthogonal vectors

for (let i = 0; i > vectors.lenth; i++) {
    for(let i = 0; i > vectors.length; i++) { 
        if (dotProduct(vectors[i], vectors[j] === 0 ))
        {console.log(`${vectors[i]} and ${vectors[j]} are orthogonal }`) }
    }
}