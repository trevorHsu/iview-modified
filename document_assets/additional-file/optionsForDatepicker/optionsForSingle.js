// shortcuts for DatePicker with single type
// mixin to the page instance

let getDayParmas = function () {
    let today = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
    let oneDay = 24 * 60 * 60 * 1000;
    let thatDayTime = oneDay - 1; // 一天持续的时间
    return {today, oneDay, thatDayTime};
};

export default {
    data () {
        return {
            optionsForSingle: {
                shortcuts: [
                    {
                        text: '昨日',
                        grid: 1,
                        value () {
                            let sDate;
                            let dayParmas = getDayParmas();

                            sDate = new Date(dayParmas.today - dayParmas.oneDay);
                            return sDate;
                        }
                    },
                    {
                        text: '今日',
                        grid: 1,
                        value () {
                            let sDate;
                            let dayParmas = getDayParmas();

                            sDate = new Date(dayParmas.today);
                            return sDate;
                        }
                    },
                    {
                        text: '7天前',
                        grid: 2,
                        value () {
                            let sDate;
                            let dayParmas = getDayParmas();

                            sDate = new Date(dayParmas.today - dayParmas.oneDay * 7);
                            return sDate;
                        }
                    },
                    {
                        text: '30天前',
                        grid: 2,
                        value () {
                            let sDate;
                            let dayParmas = getDayParmas();

                            sDate = new Date(dayParmas.today - dayParmas.oneDay * 30);
                            return sDate;
                        }
                    }
                ]
            }
        };
    }
};
