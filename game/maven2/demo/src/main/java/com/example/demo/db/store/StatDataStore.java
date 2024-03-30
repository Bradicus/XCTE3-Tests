package {BaseNs}.db.store;

import {BaseNs}.db.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

/**
* @class StatDataStore
* 
*/
public interface StatDataStore extends JpaRepository<Stat, Integer> {
}

