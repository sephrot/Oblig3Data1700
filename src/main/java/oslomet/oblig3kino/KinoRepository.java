package oslomet.oblig3kino;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KinoRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreKunde(KinoBillett innBillett) {
        String sql = "INSERT INTO KinoBillett (fnavn, enavn, tlfnr, epost, antall, valgtFilm) VALUES(?,?,?,?,?,?)";
        db.update(sql,innBillett.getfNavn(), innBillett.geteNavn(),
                innBillett.getTlfnr(), innBillett.getEpost(),
                innBillett.getAntall(), innBillett.getValgtFilm());
    }

    public List<KinoBillett> hentAlleBilletter() {
        String sql = "SELECT * FROM KinoBillett " +
                "ORDER BY enavn";
        List<KinoBillett> alleBilletter =  db.query(sql, new BeanPropertyRowMapper<>(KinoBillett.class));
        return alleBilletter;
    }

    public void slettAlleBilletter() {
        String sql = "DELETE FROM KinoBillett";
        db.update(sql);
    }
}
