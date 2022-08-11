async function parseBeatmapURL(osuApi, link) {
    const url = new URL(link);
    if (url.host !== 'osu.ppy.sh') return 1;
    const path = url.pathname.split('/');
    if (path.length < 3 || isNaN(path[2])) return 1;
    if(path[1] === 'beatmapsets' || path[1] === 's') {
        if (url.hash.length > 0) {
            const beatmap = url.hash.split('/')[1];
            return osuApi.getBeatmaps({ b: beatmap }).then(beatmaps => {
                return beatmaps[0];
            }).catch(error => {
                return error;
            });
        } else {
            return osuApi.getBeatmaps({ s: path[2] }).then(beatmaps => {
                const max = { i: 0, sr: -1 }
                for(let i = 0; i<beatmaps.length; i++) {
                    if(beatmaps[i].difficulty.rating > max.sr) { max.i = i, max.sr = beatmaps[i].difficulty.rating }
                }
                return beatmaps[max.i];
            }).catch(error => {
                return error;
            });
        }
    } else if (path[1] === 'b' || path[1] === 'beatmaps') {
        return osuApi.getBeatmaps({ b: path[2] }).then(beatmaps => {
            return beatmaps[0];
        }).catch(error => {
            return error;
        });
    } else return 1
}

module.exports = parseBeatmapURL;