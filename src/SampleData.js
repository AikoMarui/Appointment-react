const today = new Date();
const at = (hours) => today.setHours(hours, 0)
export const sampleAppointments = [
    { startAt: at(9), custumer: { firstName: 'Charlie'} },
    { startAt: at(10), custumer: { firstName: 'Alessandra'} },
    { startAt: at(11), custumer: { firstName: 'Carla'} },
    { startAt: at(12), custumer: { firstName: 'Rodolfo'} },
    { startAt: at(13), custumer: { firstName: 'Pedro'} },
    { startAt: at(14), custumer: { firstName: 'Yun Li'} },
    { startAt: at(15), custumer: { firstName: 'Julius'} },
    { startAt: at(16), custumer: { firstName: 'Cris'} },
    { startAt: at(17), custumer: { firstName: 'Leandro'} },
]