package {BaseNs}.db;

import jakarta.persistence.*;

/**
* @class Entity
* 
*/

@Entity
public class Entity {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    public int id;
    public String name;
    public List<Stat> stats;
    
    public int getId()	{ return(id); }
    public void setId(int id)	{ this.id = id; }
    public String getName()	{ return(name); }
    public void setName(String name)	{ this.name = name; }
    public List<Stat> getStats()	{ return(stats); }
    public void setStats(List<Stat> stats)	{ this.stats = stats; }
}

