package Kursovaya20.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya20.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Договор
 */
@Entity(name = "IISKursovaya20Договор")
@Table(schema = "public", name = "Договор")
public class Dogovor {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Стоимость")
    private Integer стоимость;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Тип")
    private String тип;

    @Column(name = "Длительность")
    private Integer длительность;

    @Column(name = "Статус")
    private String статус;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DirOtdPoRabSKl")
    @Convert("DirOtdPoRabSKl")
    @Column(name = "ДирОтдПоРабСКл", length = 16, unique = true, nullable = false)
    private UUID _dirotdporabsklid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DirOtdPoRabSKl", insertable = false, updatable = false)
    private DirOtdPoRabSKl dirotdporabskl;


    public Dogovor() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Integer стоимость) {
      this.стоимость = стоимость;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getТип() {
      return тип;
    }

    public void setТип(String тип) {
      this.тип = тип;
    }

    public Integer getДлительность() {
      return длительность;
    }

    public void setДлительность(Integer длительность) {
      this.длительность = длительность;
    }

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
    }


}