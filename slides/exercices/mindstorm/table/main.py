#!/usr/bin/env pybricks-micropython
from pybricks.hubs import EV3Brick
from pybricks.ev3devices import (Motor, TouchSensor, ColorSensor,
                                 InfraredSensor, UltrasonicSensor, GyroSensor)
from pybricks.nxtdevices import (LightSensor)
from pybricks.parameters import Port, Stop, Direction, Button, Color
from pybricks.tools import wait, StopWatch, DataLog
from pybricks.robotics import DriveBase
from pybricks.media.ev3dev import SoundFile, ImageFile
import random
# This program requires LEGO EV3 MicroPython v2.0 or higher.
# Click "Open user guide" on the EV3 extension tab for more information.


# Create your objects here.
ev3 = EV3Brick()
color_sensor = LightSensor(Port.S1)

motor_left = Motor(Port.B)
motor_right = Motor(Port.C)

drive = DriveBase(motor_left, motor_right, 60, 100)

sensor = UltrasonicSensor(Port.S4)
threshold = 5
def turn_left():
    drive.turn(-5)
def turn_right():
    drive.turn(5)

def move_forward():
    drive.straight(10)

def move_backward():
    drive.straight(-10)

while(True):
    sensor_value = sensor.distance()
    if sensor_value < threshold:
        move_forward()
    else:
        move_backward()
        move_backward()
        angle_rand = random.randrange(-90,90)
        drive.turn(angle_rand)
