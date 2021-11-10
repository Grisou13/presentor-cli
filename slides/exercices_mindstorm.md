# 1. Dis bonjour

## Programme de base

--

## Resultat

---

# 2. Faire tourner le robot avec les boutons

## Programme de base

```python
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
ultrasonic_sensor = UltrasonicSensor(Port.S4)

motor_left = Motor(Port.B)
motor_right = Motor(Port.C)

drive = DriveBase(motor_left, motor_right, 60, 100)
```

--

## Resultat

---

# 3. Faire tourner le robot en carré

## Programme de base

```python
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
ultrasonic_sensor = UltrasonicSensor(Port.S4)

motor_left = Motor(Port.B)
motor_right = Motor(Port.C)

drive = DriveBase(motor_left, motor_right, 60, 100)
```

--

## Resultat

---

# 4. Faire en sorte que le robot ne tombe pas de la table

## Programme de base

```python
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
ultrasonic_sensor = UltrasonicSensor(Port.S4)

motor_left = Motor(Port.B)
motor_right = Motor(Port.C)

drive = DriveBase(motor_left, motor_right, 60, 100)
```

--

## Resultat

```python
#....
threshold = 400

def turn_left():
    drive.turn(-5)
def turn_right():
    drive.turn(5)

def move_forward():
    drive.straight(10)

def move_backward():
    drive.straight(-30)

previous = 0

while(True):
    previous = sensor_value = ultrasonic_sensor.distance()
    print(sensor_value)
        
    if sensor_value > threshold:
        move_backward()
        angle_rand = random.choice([i for i in range(-180,180) if i not in range(-90,90)])
        drive.turn(angle_rand)
    else:
        move_forward()

```

---

# 5. Faire en sorte que le robot suive une ligne

## Programme de base

```python
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
```


--

## Resultat

```python
# ...

threshold = 50

def turn_left():
    drive.turn(-5)
def turn_right():
    drive.turn(5)

def move_forward():
    drive.straight(10)


switcher_counter = 0
direction = None
altered = False
while(True):
    sensor_value = color_sensor.reflection()
    
    
    print(sensor_value)
    if sensor_value < threshold:
        switcher_counter = 0
        altered = False
        move_forward()
    else:
        if switcher_counter <= 0:
            rand = random.randrange(0,100)
            direction = "left" if rand > 50 else "right"
        elif switcher_counter > 3 and altered is False:
            altered = True
            if direction is "left":
                direction = "right"
                
            else:
                direction = "left"

        if direction is "left":
            switcher_counter = switcher_counter + 1
            turn_left()
        else:
            switcher_counter = switcher_counter + 1
            turn_right()
```


---

[include 'lego_cheatsheet.md']
