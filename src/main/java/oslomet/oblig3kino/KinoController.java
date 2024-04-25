package oslomet.oblig3kino;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class KinoController {

    @Autowired
    private KinoRepository rep;

    @PostMapping("/lagre")
    public void opprettListe(KinoBillett kinoBillett) {
        rep.lagreKunde(kinoBillett);
    }

    @GetMapping("/hentAlle")
    public List<KinoBillett> hentAlle() {
        return rep.hentAlleBilletter();
    }

    @GetMapping("/slett")
    public void slett() {
        rep.slettAlleBilletter();
    }
}
