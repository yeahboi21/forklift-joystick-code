radio.onReceivedNumber(function (receivedNumber) {
    Action = receivedNumber
})
let Action = 0
joystickbit.initJoystickBit()
radio.setGroup(17)
basic.showIcon(IconNames.Skull)
basic.forever(function () {
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendNumber(5)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(6)
    } else {
    	
    }
})
basic.forever(function () {
    if (Action == 5) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
    }
    if (Action == 6) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
    }
})
