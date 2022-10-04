import _ from 'lodash';
// const d = JSON.parse(localStorage.getItem('transactions'));
// const data = d.transactions

export function getSum(data, type) {
    let sum = _(data).groupBy("type").map((objs, key) => {

        if (!type) return _.sumBy(objs, 'amount');
        return {
            'type': key,
            'total': _.sumBy(objs, 'amount')
        }
    }).value();

    return sum;
}

// getSum();
export function getLabels(data) {
    let amountSum = getSum(data, 'type');
    let Total = _.sum(getSum(data));
    let percent = _(amountSum).map(objs => _.assign(objs, { percent: (100 * objs.total) / Total })).value();

    return percent;
}

export function getAvail(data) {
    let amountSum = getSum(data, 'type');
    let t = 0;
    let color = '';
    amountSum.map((val) => {
        if (val.type === "cash") {

            t = t + val.total;
        } else if (val.type === "expense") {
            t = t - val.total;
        } else {
            t = t - val.total;
        }

        return 0;
    })

    // for (let i = 0; i < 3; i++) {
    //     let x = amountSum[i];
    //     if (x.type == "cash") {
    //         t = t + x.total;
    //     }

    //     if (x.type == "expense") {
    //         t = t - x.total;
    //     }

    //     if (x.type == "investment") {
    //         t = t - x.total;
    //     }
    // }

    if (t < 0) {
        color = "red";
    } else {
        color = "#14a614";
    }
    return { t, color };
    // console.log(t);
}