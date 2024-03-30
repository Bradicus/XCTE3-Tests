package {BaseNs}.db.model;

import java.time.*;
import java.util.*;
import jakarta.persistence.*;

/**
* @class Stat
* 
*/

@Entity
public class Stat {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    public int id;
    public String name;
    public float curValue;
    public float maxValue;
    
    public int getId()	{ return(id); }
    public void setId(int id)	{ this.id = id; }
    public String getName()	{ return(name); }
    public void setName(String name)	{ this.name = name; }
    public float getCurValue()	{ return(curValue); }
    public void setCurValue(float curValue)	{ this.curValue = curValue; }
    public float getMaxValue()	{ return(maxValue); }
    public void setMaxValue(float maxValue)	{ this.maxValue = maxValue; }
}

