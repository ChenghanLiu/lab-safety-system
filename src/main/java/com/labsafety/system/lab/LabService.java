package com.labsafety.system.lab;

import com.labsafety.system.lab.dto.CreateLabRequest;
import com.labsafety.system.lab.dto.UpdateLabRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class LabService {

    private final LabRepository labRepository;

    public LabService(LabRepository labRepository) {
        this.labRepository = labRepository;
    }

    @Transactional(readOnly = true)
    public List<Lab> listLabs() {
        return labRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Lab getLab(Long id) {
        return labRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Lab not found"));
    }

    @Transactional
    public Lab createLab(CreateLabRequest req) {
        if (labRepository.existsByName(req.getName())) {
            throw new IllegalArgumentException("Lab name already exists");
        }
        Lab lab = LabMapper.fromCreate(req);
        return labRepository.save(lab);
    }

    @Transactional
    public Lab updateLab(Long id, UpdateLabRequest req) {
        Lab lab = labRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Lab not found"));

        if (!lab.getName().equals(req.getName()) && labRepository.existsByName(req.getName())) {
            throw new IllegalArgumentException("Lab name already exists");
        }

        LabMapper.applyUpdate(lab, req);
        return labRepository.save(lab);
    }

    @Transactional
    public void deleteLab(Long id) {
        if (!labRepository.existsById(id)) {
            throw new IllegalArgumentException("Lab not found");
        }
        labRepository.deleteById(id);
    }
}

