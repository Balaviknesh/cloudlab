package io.egen.entity;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@EntityListeners(AuditingEntityListener.class)
public class Avenger {
    @Id
    @Column(columnDefinition = "VARCHAR(36)")
    private String id;

    @Column()
    private String name;

    @Column()
    private String realName;

    @Column()
    private String superpower;

    @Column
    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    public Avenger() {
        this.id = UUID.randomUUID().toString();
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getRealName() {
        return realName;
    }

    public String getSuperpower() {
        return superpower;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public void setSuperpower(String superpower) {
        this.superpower = superpower;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
