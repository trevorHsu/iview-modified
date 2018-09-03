// shortcuts for DatePicker with range type
// mixin to the page instance

import {proStorage} from '@/vendors/localstorage.js';

let getDayParmas = function () {
    let today = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
    let oneDay = 24 * 60 * 60 * 1000;
    let thatDayTime = oneDay - 1; // 一天持续的时间
    return {today, oneDay, thatDayTime};
};

export default {
    data () {
        return {
            optionsForRange: {
                shortcuts: [
                    {
                        text: '昨日',
                        grid: 1,
                        value () {
                            let sDate, eDate;
                            let dayParmas = getDayParmas();

                            sDate = new Date(dayParmas.today - dayParmas.oneDay);
                            eDate = new Date(sDate.valueOf() + dayParmas.thatDayTime);
                            return [sDate, eDate];
                        }
                    },
                    {
                        text: '今日',
                        grid: 1,
                        value () {
                            let sDate, eDate;
                            let dayParmas = getDayParmas();

                            sDate = new Date(dayParmas.today);
                            eDate = new Date();
                            return [sDate, eDate];
                        }
                    },
                    {
                        text: '上周',
                        grid: 1,
                        value () {
                            let sDate, eDate, dayNumber;
                            let dayParmas = getDayParmas();

                            dayNumber = dayParmas.today.getDay() !== 0 ? dayParmas.today.getDay() : 7;
                            sDate = new Date(dayParmas.today - dayParmas.oneDay * (dayNumber + 6));
                            eDate = new Date(dayParmas.today - dayParmas.oneDay * dayNumber + dayParmas.thatDayTime);
                            return [sDate, eDate];
                        }
                    },
                    {
                        text: '本周',
                        grid: 1,
                        value () {
                            let sDate, eDate, dayNumber;
                            let dayParmas = getDayParmas();

                            dayNumber = dayParmas.today.getDay() !== 0 ? dayParmas.today.getDay() : 7;
                            sDate = new Date(dayParmas.today - dayParmas.oneDay * (dayNumber - 1));
                            eDate = new Date();
                            return [sDate, eDate];
                        }
                    },
                    {
                        text: '上月',
                        grid: 1,
                        value () {
                            let sDate, eDate;
                            let dayParmas = getDayParmas();

                            eDate = new Date(dayParmas.today - dayParmas.oneDay * dayParmas.today.getDate());
                            sDate = new Date(eDate - dayParmas.oneDay * (eDate.getDate() - 1));
                            eDate = new Date(dayParmas.today - dayParmas.oneDay * dayParmas.today.getDate() + dayParmas.thatDayTime);
                            return [sDate, eDate];
                        }
                    },
                    {
                        text: '本月',
                        grid: 1,
                        value () {
                            let sDate, eDate;
                            let dayParmas = getDayParmas();

                            sDate = new Date(dayParmas.today - dayParmas.oneDay * (dayParmas.today.getDate() - 1));
                            eDate = new Date();
                            return [sDate, eDate];
                        }
                    },
                    {
                        text: '去年',
                        grid: 1,
                        value () {
                            let sDate, eDate, sYear, eYear;
                            let dayParmas = getDayParmas();

                            sYear = new Date(dayParmas.today);
                            sYear.setFullYear(dayParmas.today.getFullYear() - 1);
                            sYear.setMonth(0);
                            sYear.setDate(1);
                            eYear = new Date(sYear);
                            eYear.setFullYear(eYear.getFullYear() + 1);
                            eYear.setTime(eYear.getTime() - 1);
                            sDate = sYear;
                            eDate = eYear;
                            return [sDate, eDate];
                        }
                    },
                    {
                        text: '本年',
                        grid: 1,
                        value () {
                            let sDate, eDate, sYear;
                            let dayParmas = getDayParmas();

                            sYear = new Date(dayParmas.today);
                            sYear.setFullYear(dayParmas.today.getFullYear());
                            sYear.setMonth(0);
                            sYear.setDate(1);
                            sDate = sYear;
                            eDate = new Date();
                            return [sDate, eDate];
                        }
                    },
                    {
                        text: '过去7天',
                        grid: 2,
                        value () {
                            let sDate, eDate;
                            let dayParmas = getDayParmas();

                            sDate = new Date(dayParmas.today - dayParmas.oneDay * 6);
                            eDate = new Date();
                            return [sDate, eDate];
                        }
                    },
                    {
                        text: '过去30天',
                        grid: 2,
                        value () {
                            let sDate, eDate;
                            let dayParmas = getDayParmas();

                            sDate = new Date(dayParmas.today - dayParmas.oneDay * 29);
                            eDate = new Date();
                            return [sDate, eDate];
                        }
                    },
                    {
                        text: '上线至今',
                        grid: 2,
                        value () {
                            let sDate, eDate;
                            let startservicetime = proStorage.fetch('serverOpenTime');

                            sDate = new Date(startservicetime);
                            eDate = new Date();
                            return [sDate, eDate];
                        }
                    }
                ]
            }
        };
    }
};
